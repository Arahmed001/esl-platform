import { Suspense } from "react"
import { VocabularyReview } from "../components/VocabularyReview"
import { PronunciationPractice } from "../components/PronunciationPractice"
import { PronunciationProgress } from "../components/PronunciationProgress"
import { GamificationSystem } from "../components/GamificationSystem"
import { UserProfile } from "../components/UserProfile"
import { Loader2, BookOpen, Mic, TrendingUp, Trophy } from lucide-react

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">ESL Learning Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Suspense fallback={<LoadingCard icon={<BookOpen className="w-8 h-8" />} text="Loading User Profile..." />}>
            <UserProfile />
          </Suspense>
          
          <Suspense fallback={<LoadingCard icon={<Trophy className="w-8 h-8" />} text="Loading Gamification..." />}>
            <GamificationSystem />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Suspense fallback={<LoadingCard icon={<BookOpen className="w-8 h-8" />} text="Loading Vocabulary Review..." />}>
            <VocabularyReview />
          </Suspense>

          <Suspense fallback={<LoadingCard icon={<Mic className="w-8 h-8" />} text="Loading Pronunciation Practice..." />}>
            <PronunciationPractice />
          </Suspense>
        </div>

        <div className="mt-8">
          <Suspense fallback={<LoadingCard icon={<TrendingUp className="w-8 h-8" />} text="Loading Progress..." />}>
            <PronunciationProgress />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

function LoadingCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-64">
      {icon}
      <Loader2 className="h-8 w-8 animate-spin mt-4" />
      <p className="mt-4 text-gray-600">{text}</p>
    </div>
  )
}
