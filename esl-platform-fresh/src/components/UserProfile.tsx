"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { Loader2, User, Star, Zap } from 'lucide-react'

interface UserData {
  id: string
  level: number
  total_xp: number
  streak: number
  last_streak_date: string
}

export function UserProfile() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setUserData({
        id: '1',
        level: 5,
        total_xp: 2500,
        streak: 7,
        last_streak_date: new Date().toISOString()
      })
      setIsLoading(false)
    }, 1500)
  }, [])

  if (isLoading) {
    return <LoadingCard />
  }

  if (!userData) {
    return <div>No user data available.</div>
  }

  const xpToNextLevel = 1000 - (userData.total_xp % 1000)

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardTitle className="flex items-center">
          <User className="w-6 h-6 mr-2" />
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">Level {userData.level}</span>
          <Badge variant="secondary" className="text-lg px-3 py-1 bg-yellow-400 text-yellow-900">
            <Star className="w-4 h-4 mr-1" />
            {userData.total_xp} XP
          </Badge>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1 text-gray-600">
            <span>XP to next level</span>
            <span>{xpToNextLevel} XP</span>
          </div>
          <Progress value={((1000 - xpToNextLevel) / 1000) * 100} className="h-2 bg-gray-200" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Current Streak</span>
          <Badge className="bg-orange-500 text-white px-3 py-1">
            <Zap className="w-4 h-4 mr-1" />
            {userData.streak} days
          </Badge>
        </div>
        <div className="text-sm text-gray-500">
          Last active: {new Date(userData.last_streak_date).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  )
}

function LoadingCard() {
  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex justify-center items-center h-48">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </CardContent>
    </Card>
  )
}
