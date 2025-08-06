import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import { LanguageProvider } from '@/contexts/LanguageContext.tsx'

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    </QueryClientProvider>
)

export default App
