import { Textarea } from '@/components/form/DescritptionField';
import { Gallery } from '@/components/form/Gallery';
import { NameField } from '@/components/form/NameField';
import { PriceField } from '@/components/form/PriceField';
import { Select } from '@/components/form/SelectField';
import { Spacer } from '@/components/form/Spacer';
import { TimeField } from '@/components/form/TimeField';
import { Button } from '@/components/ui/Button';

export default async function Add() {
  return (
    <>
      <div className="max-w-5xl mx-auto my-12 ">
        <form className="flex flex-col">
          <div className="p-12 rounded bg-[rgba(255,255,255)]">
            <div className="max-w-md">
              <NameField
                name="Name"
                placeholder="for ex. UI UX android app design"
                className="max-w-md"
              />
            </div>
            <div className="flex max-w-lg gap-5">
              <Select name="Category" placeholder="choose category" />
              <Select name="Sub-Category" placeholder="choose sub-category" />
            </div>
            <Spacer />
            <Gallery />
            <Spacer />
            <div className="max-w-lg">
              <Textarea name="description" rows={6} />
            </div>
            <Spacer />
            <div className="flex max-w-md gap-5">
              <PriceField name="price" />
              <TimeField name="estimated time" />
            </div>
          </div>
          <div className="flex items-end justify-end gap-4 px-12 py-6 mt-6 rounded bg-[rgba(255,255,255)]">
            <Button variant="subtle">Cancel</Button>
            <Button variant="default">Add Offer</Button>
          </div>
        </form>
      </div>
    </>
  );
}
