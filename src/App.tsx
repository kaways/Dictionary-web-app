import { Input } from "@/components/ui/input";
import Logo from '@/assets/images/Shape.png';
import { Switch } from "@/components/ui/switch"

export function App() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

      <div>
        <img className="size-12 shrink-0" src={Logo} alt="Dictionary Logo" />

        <div>
          <h2>Sans Seriff</h2>
          <div>
            <Switch />
          </div>
        </div>
      </div>


      <div>
        <Input />
      </div>




    </div>
  )
}
