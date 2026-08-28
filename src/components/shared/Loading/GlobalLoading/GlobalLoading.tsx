import { LuLoaderPinwheel } from "react-icons/lu";

const GlobalLoading = () => {
    return (

        <div className="min-h-screen bg-background text-slate-900 ">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-secondary shadow-2xl shadow-cyan-500/60">
                    <LuLoaderPinwheel className="h-12 w-12 animate-spin text-accent-soft" />
                </div>
                <div className="space-y-4 font-lora">
                    <h1 className="text-2xl lg:text-4xl font-bold lg:font-extrabold tracking-tight text-slate-950 sm:text-5xl font-lora">
                        Hold On - Loading <span className="bg-linear-to-r from-primary to-accent bg-clip-text  text-transparent">E-Store</span>
                    </h1>
                    <p className="font-inter mx-auto max-w-3xl text-sm leading-7 text-foreground sm:text-base">
                        One moment while we fetch your All Product And
                        content. The site is almost ready.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlobalLoading;