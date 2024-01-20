import Calculator from "./components/Calculator";
import Motion from "./components/Motion";
import ThemeColorSwitcher from "./components/ThemeColorSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";


function App() {
    return (
        <>
            <main className=" bg-white dark:bg-black relative">
                <div className=" py-24 sm:py-32">
                    <div className=" mx-auto max-w-7xl px-4 lg:px-0">

                        <ThemeSwitcher/>
                        <div className=" mx-auto max-w-2xl sm:text-center">

                            <h2 className="text-brand text-3xl font-bold tracking-tighter sm:text-4xl text-center">切换主题</h2>
                            <p className=" mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center"> 2343242544 </p>
                        </div>
                        <ThemeColorSwitcher/>
                        
                        <Calculator />
                    </div>
                    <hr />
                    
                    <Motion></Motion>
                </div>
            </main>
        </>
    )
}

export default App;
