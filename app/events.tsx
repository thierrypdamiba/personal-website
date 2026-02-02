import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function EventsPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <span className="text-xs font-medium text-blue-600">Conference</span>
            <h3 className="font-semibold">ODSC AI West</h3>
            <p className="text-gray-600 text-sm">Hands-on training: Powering AI with Vector Search</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <span className="text-xs font-medium text-blue-600">Talk</span>
            <h3 className="font-semibold">AI Talks at Qlay (Qdrant + SambaNova)</h3>
            <p className="text-gray-600 text-sm">The MiniCoil Sparse Retrieval Model</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <span className="text-xs font-medium text-blue-600">Host</span>
            <h3 className="font-semibold">Qdrant AI Builders: Agentic RAG for Beginners</h3>
            <p className="text-gray-600 text-sm">Welcome talk: The Future of Agentic AI @ AWS Loft, SF</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <span className="text-xs font-medium text-blue-600">Host</span>
            <h3 className="font-semibold">Qdrant AI Builders: Show &amp; Tell</h3>
            <p className="text-gray-600 text-sm">Enterprise AI agents &amp; RAG @ AWS Loft, SF</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <span className="text-xs font-medium text-blue-600">Conference</span>
            <h3 className="font-semibold">Agents in Production Conference</h3>
            <p className="text-gray-600 text-sm">AI agents at scale in production environments</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <span className="text-xs font-medium text-blue-600">Talk</span>
            <h3 className="font-semibold">A Data Driven Approach to Productionizing RAG Systems</h3>
            <p className="text-gray-600 text-sm">Practical strategies for taking RAG from prototype to production</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4">
            <span className="text-xs font-medium text-pink-600">Podcast</span>
            <h3 className="font-semibold">AI Ketchup: Mission Critical for Vector Databases and Agentic Systems</h3>
            <p className="text-gray-600 text-sm">Exploring the intersection of AI security, vector databases, and career transformation</p>
          </div>
        </div>
        <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">Back to Home</Link>
      </main>
    </div>
  )
}
