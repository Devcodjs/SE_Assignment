// This API route (app/api/submit/route.js) handles a single test case submission.
// It receives `source`, `questionNumber`, `lang`, `testCaseType`, and `testCaseIndex`.

import { NextRequest, NextResponse } from 'next/server';
import { questions } from '../../../lib/questions'; // Adjusted import path

const HACKEREARTH_API_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
const CLIENT_SECRET = process.env.HACKEREARTH_SECRET;

// Map frontend language keys to HackerEarth API language codes
const langMap = {
  'C': 'C',
  'CPP': 'CPP14',
  'Java': 'JAVA8',
  'Python': 'PYTHON3_8',
};

type LangKey = keyof typeof langMap;

export async function POST(request: NextRequest, response: NextResponse) {
  if (!CLIENT_SECRET) {
    return NextResponse.json(
      { message: 'Server configuration error: Missing API secret.' },
      { status: 500 }
    );
  }

  const { source, questionNumber, lang, testCaseType, testCaseIndex } = await request.json();

  // Basic validation
  if (!source || typeof questionNumber === 'undefined' || !lang || !testCaseType || typeof testCaseIndex === 'undefined') {
    return NextResponse.json(
      { message: 'Missing required fields: `source`, `questionNumber`, `lang`, `testCaseType`, `testCaseIndex`.' },
        { status: 400 }
    );
  }

  // Validate the incoming language
  const hackerEarthLang = langMap[lang as LangKey];
  if (!hackerEarthLang) {
    return NextResponse.json(
      { message: `Language '${lang}' is not supported.` },
      { status: 400 }
    );
  }

  const question = questions[questionNumber];
  if (!question) {
    return NextResponse.json(
      { message: `Question number ${questionNumber} not found.` },
      { status: 404 }
    );
  }

  const caseType = testCaseType as 'sampleTestCases' | 'hiddenTestCases';

  // Get the specific test case
  const testCase = question[caseType]?.[testCaseIndex];
  if (!testCase) {
    return NextResponse.json(
      { message: `Test case ${testCaseType} #${testCaseIndex} not found.` },
      { status: 404 }
    );
  }

  // Prepare the data for HackerEarth API
  const requestBody = {
    lang: hackerEarthLang,
    source: source,
    input: testCase.input,
    time_limit: question.time_limit,
    memory_limit: question.memory_limit,
  };

  try {
    const apiResponse = await fetch(HACKEREARTH_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client-secret': CLIENT_SECRET,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return NextResponse.json(
        { message: data.message || 'Error submitting to HackerEarth.', errors: data.errors },
        { status: apiResponse.status }
      );
    }

    // Send back essential info. We add testCaseIndex to help frontend track.
    return NextResponse.json(
      {
        he_id: data.he_id,
        request_status_message: data.request_status.message,
        testCaseIndex, // Echo back the index
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in /api/submit:', error);
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}