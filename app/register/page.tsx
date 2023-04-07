import claws from '@/public/claws.svg';
import logo from '@/public/skill_hunter.svg';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Input } from '@/components/UserInput';

export default async function Login() {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-1/2 h-screen">
          <div className="flex flex-col mb-10">
            <p className="text-3xl font-bold">Create and account</p>
            <p className="text-base">Welcome, please enter your details.</p>
          </div>

          <form>
            <div className="flex flex-col gap-7">
              <Input name="name" type="text" _size="default" />
              <Input name="email" type="text" _size="default" />
              <Input name="password" type="password" _size="default" />
            </div>

            <div className="flex flex-col mt-10 space-y-2">
              <Button variant="default" size="default">
                Register
              </Button>
              <Button variant="google" size="default">
                Register with google
              </Button>
            </div>

            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <a className="font-bold underline" href="/login">
                Register now
              </a>
            </p>
          </form>

          <Image
            alt="claws"
            className="absolute bottom-0 left-0"
            width={216}
            src={claws}
          />
        </div>

        <div className="flex items-center justify-center w-1/2 h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
          <Image alt="logo" className="absolute" src={logo} />
        </div>
      </div>
    </div>
  );
}
