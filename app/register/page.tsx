import claws from '@/public/claws.svg';
import logo from '@/public/skill_hunter.svg';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/UserInput';

export default async function Register() {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-1/2 h-screen">
          <div className="flex flex-col mb-10">
            <p className="text-3xl font-bold">Create and account</p>
            <p className="text-base">Welcome, please enter your details.</p>
          </div>

          <form className="w-80">
            <div className="flex flex-col gap-7">
              <Input name="name" type="text" />
              <Input name="email" type="text" />
              <Input name="password" type="password" />
            </div>

            <div className="flex flex-col mt-10 space-y-2">
              <Button variant="default" size="lg">
                Register
              </Button>
            </div>

            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <a className="font-bold underline" href="/login">
                Login now
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

        <div className="flex items-center justify-center w-1/2 h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
          <Image alt="logo" className="absolute" src={logo} />
        </div>
      </div>
    </div>
  );
}
