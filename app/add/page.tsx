import { Button } from '@/components/Button';
import { Textarea } from '@/components/form/DescritptionField';
import { Gallery } from '@/components/form/Gallery';
import { NameField } from '@/components/form/NameField';
import { PriceField } from '@/components/form/PriceField';
import { Select } from '@/components/form/SelectField';
import { TimeField } from '@/components/form/TimeField';

export default async function Add() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto my-12 ">
        <p className="text-xl font-medium">Add Offer</p>
        <form className="flex flex-col">
          <div className="p-12 bg-white rounded">
            <NameField
              name="Name"
              placeholder="for ex. UI UX android app design"
            />
            <div className="flex gap-5">
              <Select name="Category" placeholder="choose category" />
              <Select name="Sub-Category" placeholder="choose sub-category" />
            </div>
            <hr className="h-px my-12 bg-neutral-200 border-0 m-[-48px]" />
            <Gallery galleryWidth="default" />
            <hr className="h-px my-12 bg-neutral-200 border-0 m-[-48px]" />
            <Textarea name="description" rows={6} />
            <hr className="h-px my-12 bg-neutral-200 border-0 m-[-48px]" />
            <div className="flex gap-12">
              <PriceField name="price" />
              <TimeField name="estimated time" />
            </div>
          </div>
        </form>

        <div className="flex items-end justify-end gap-4 px-12 py-6 mt-6 bg-white rounded">
          <Button variant="outline">Cancel</Button>
          <Button variant="default">Add Offer</Button>
        </div>
      </div>
    </>
  );
}
