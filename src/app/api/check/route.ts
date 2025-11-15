// This API route (app/api/check/route.js) checks a single submission.
// It receives `submissionId`, `questionNumber`, `testCaseType`, and `testCaseIndex`.

import { NextRequest, NextResponse } from 'next/server';
import { questions } from '../../../lib/questions'; // Adjusted import path

const GET_STATUS_BASE_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
const CLIENT_SECRET = process.env.HACKEREARTH_SECRET;

async function fetchOutput(outputUrl: string): Promise<string | null> {
  try {
    const response = await fetch(outputUrl);
    if (!response.ok) return null;
    const text = await response.text();
    return text.trim();
  } catch (error) {
    console.error('Error fetching output:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  if (!CLIENT_SECRET) {
    return NextResponse.json(
      { message: 'Server configuration error: Missing API secret.' },
      { status: 500 }
    );
  }

  const { submissionId, questionNumber, testCaseType, testCaseIndex } = await request.json();

  if (!submissionId || typeof questionNumber === 'undefined' || !testCaseType || typeof testCaseIndex === 'undefined') {
    return NextResponse.json(
      { message: 'Missing required fields: `submissionId`, `questionNumber`, `testCaseType`, `testCaseIndex`.' },
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

  const testCase = question[caseType]?.[testCaseIndex];
  if (!testCase) {
    return NextResponse.json(
      { message: `Test case ${testCaseType} #${testCaseIndex} not found.` },
      { status: 404 }
    );
  }

  const STATUS_URL = `${GET_STATUS_BASE_URL}${submissionId}/`;

  try {
    const apiResponse = await fetch(STATUS_URL, {
      method: 'GET',
      headers: { 'client-secret': CLIENT_SECRET },
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return NextResponse.json(
        { message: data.message || 'Error fetching status.' },
        { status: apiResponse.status }
      );
    }

    const requestStatus = data.request_status.code;

    // 1. Check if still running
    if (requestStatus !== 'REQUEST_COMPLETED') {
      return NextResponse.json({
        verdict: requestStatus, // "REQUEST_QUEUED", "CODE_COMPILED"
        message: data.request_status.message,
        testCaseIndex, // Echo back index
      });
    }

    // 2. Check for Compilation Error
    if (data.result.compile_status !== 'OK') {
      return NextResponse.json({
        verdict: 'Compilation Error',
        message: data.result.compile_status,
        testCaseIndex,
      });
    }

    const runStatus = data.result.run_status.status;

    // 3. Check for Runtime Errors (TLE, MLE, RE)
    if (runStatus !== 'AC') {
      return NextResponse.json({
        verdict: runStatus,
        message: data.result.run_status.status_detail || runStatus,
        testCaseIndex,
      });
    }

    // 4. Status is 'AC' (Accepted) - Verify output
    const outputUrl = data.result.run_status.output;
    const actualOutput = await fetchOutput(outputUrl);

    if (actualOutput === null) {
      return NextResponse.json(
        { message: 'Failed to fetch program output.' },
        { status: 500 }
      );
    }

    const expectedOutput = testCase.expected_output.trim();

    // 5. Final Comparison
    if (actualOutput === expectedOutput) {
      return NextResponse.json({
        verdict: 'Accepted',
        message: 'Passed',
        output: actualOutput,
        expected: expectedOutput,
        testCaseIndex,
      });
    } else {
      return NextResponse.json({
        verdict: 'Wrong Answer',
        message: `Expected: "${expectedOutput}", Got: "${actualOutput}"`,
        output: actualOutput,
        expected: expectedOutput,
        testCaseIndex,
      });
    }
  } catch (error) {
    console.error('Error in /api/check:', error);
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}