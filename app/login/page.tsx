import claws from '@/public/claws.svg';
import logo from '@/public/skill_hunter.svg';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/UserInput';

export default async function Login() {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-1/2 h-screen">
          <div className="flex flex-col mb-10">
            <p className="text-3xl font-bold">Good to see you again</p>
            <p className="text-base">
              Welcome back, please enter your details to login
            </p>
          </div>

          <form className="w-80">
            <div className="flex flex-col gap-7">
              <Input name="name" type="text" />
              <Input name="password" type="password" />
            </div>

            <div className="flex flex-col mt-10 space-y-2">
              <Button variant="default" size="lg">
                Login
              </Button>
            </div>

            <p className="mt-4 text-sm text-center">
              Dont have account yet?{' '}
              <a className="font-bold underline" href="/register">
                Register now
              </a>
            </p>
          </form>

          <Image
            alt="claws"
            className="absolute bottom-0 left-0"
            width={216}
            src={claws}
            priority={true}
          />
        </div>

        <div className="flex items-center justify-center w-1/2 h-screen bg-gradient-to-r from-purple-500 to-pink-500">
          <Image alt="logo" className="absolute" src={logo} />
        </div>
      </div>
    </div>
  );
}
