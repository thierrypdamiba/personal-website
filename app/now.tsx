import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function NowPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">What I&apos;m Doing Now</h1>
        <p className="mb-4">I&apos;m a developer advocate at Qdrant, building communities in AI and vector search.</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Hosting AI Builders events at AWS Loft in SF</li>
          <li>Writing about RAG, agents, and vector search applications</li>
          <li>Speaking at conferences like ODSC AI West and Agents in Production</li>
          <li>Exploring agentic AI systems and sparse retrieval models</li>
        </ul>
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </main>
    </div>
  )
}
