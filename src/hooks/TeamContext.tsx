import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect,
  type ReactNode
} from "react";
import { 
  getFirestore, 
  collection, 
  query, 
  where, 
  getDocs,
  type DocumentData
} from "firebase/firestore";
// Import your initialized firebase app here
import { app } from "~/lib/Firebase/firebase"; // Assuming your firebase init is in './firebase'
import { useAuth } from "./AuthContext";

// --- Type Definitions ---

// Based on your 'users' array
export interface TeamUser {
  id: string;       // Firestore document ID
  teamID: string;
  name: string;
  email: string;
}

// Based on your 'teams' array
export interface Team {
  id: string;       // Firestore document ID
  uid: string;
  participant1: string;
  participant2: string;
  participant3: string;
  round1: "eligible" | "not_decide" | string; // Use string for flexibility or union
  round2: "not_decide" | string;
  round3: "not_decide" | string;
}

// Defines the data exposed by the context
interface TeamContextType {
  currentUser: TeamUser | null;
  currentTeam: Team | null;
  teamMembers: TeamUser[];
  loading: boolean;
  error: string | null;
}

// Props for the provider component
interface TeamProviderProps {
  children: ReactNode;
}

// --- Context & Provider ---

const db = getFirestore(app);

// Create context with a default value (as undefined, since it will be provided)
const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: TeamProviderProps) => {
  // --- State Hooks with Types ---
  const [currentUser, setCurrentUser] = useState<TeamUser | null>(null);
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamUser[]>([]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { user, loading: authLoading } = useAuth();
  
  // We derive the email from the user object.
  const userEmail = user?.email || null;

  useEffect(() => {
    // Don't fetch if no email is provided
    if (!userEmail) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // --- 1. Fetch the Current User by Email ---
        const usersRef = collection(db, "users");
        const userQuery = query(usersRef, where("email", "==", userEmail));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
          throw new Error("User not found in database");
        }

        // Helper to cast Firestore doc to our type
        const docToUser = (doc: DocumentData): TeamUser => {
          return { id: doc.id, ...doc.data() } as TeamUser;
        };
        
        const userData = docToUser(userSnapshot.docs[0]!);
        setCurrentUser(userData);

        const teamID = userData.teamID;

        if (teamID) {
          // --- 2. Fetch the Team Data ---
          const teamsRef = collection(db, "teams");
          const teamQuery = query(teamsRef, where("uid", "==", teamID)); 
          const teamSnapshot = await getDocs(teamQuery);

          if (!teamSnapshot.empty) {
            const teamDoc = teamSnapshot.docs[0]!;
            const teamData = { id: teamDoc.id, ...teamDoc.data() } as Team;
            setCurrentTeam(teamData);
          }

          // --- 3. Fetch All Members of this Team ---
          const membersQuery = query(usersRef, where("teamID", "==", teamID));
          const membersSnapshot = await getDocs(membersQuery);

          const membersData = membersSnapshot.docs.map(docToUser);
          setTeamMembers(membersData);
        }

      } catch (err: any) {
        console.error("Error fetching team context:", err);
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userEmail]);

  // Context value
  const value = { currentUser, currentTeam, teamMembers, loading, error };

  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  );
};

// --- Custom Hook ---
export const useTeamData = (): TeamContextType => {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error("useTeamData must be used within a TeamProvider");
  }
  return context;
};