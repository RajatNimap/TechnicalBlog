import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

export default function SiteLayout({children}:{children:React.ReactNode}){
            return (
                    <div className="flex min-h-screen flex-col">
                        <Header />
                         <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
                             {children}
                         </main>
                        <Footer />
                    </div>
            )
}


