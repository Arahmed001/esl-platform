"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react'

export function VocabularyReview() {
  const [word, setWord] = useState("Ubiquitous")
  const [definition, setDefinition] = useState("Present, appearing, or found everywhere.")
  const [showDefinition, setShowDefinition] = useState(false)

  const nextWord = () => {
    setWord("Ephemeral")
    setDefinition("Lasting for a very short time.")
    setShowDefinition(false)
  }

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <CardTitle className="flex items-center">
          <RefreshCw className="w-6 h-6 mr-2" />
          Vocabulary Review
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-center text-gray-800">{word}</h3>
          {showDefinition ? (
            <div className="space-y-4">
              <p className="text-center text-gray-600">{definition}</p>
              <div className="flex justify-center space-x-4">
                <Button onClick={nextWord} variant="outline" className="flex items-center">
                  <ThumbsDown className="mr-2 h-4 w-4" />
                  Hard
                </Button>
                <Button onClick={nextWord} className="bg-green-500 hover:bg-green-600 text-white flex items-center">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Easy
                </Button>
              </div>
            </div>
          ) : (
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setShowDefinition(true)}>
              Show Definition
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
