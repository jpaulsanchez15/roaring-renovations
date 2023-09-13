import Link from "next/link";
import React from "react";

type FindMoreProps = {
  message: string;
  CTA: string;
  href: string;
};

const FindMore = ({ ...props }: FindMoreProps) => {
  return (
    <div className="bg-white rounded-full my-4 ">
      <div className="mx-auto max-w-2xl">
        <div className="flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 hover:bg-gray-300 text-gray-600 ring-1 ring-gray-900/10 hover:bg-vanilla hover:ring-gray-900/20">
            {props.message}{" "}
            <Link
              href={props.href}
              className="font-semibold text-roaring-renovations-yellow"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {props.CTA} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FindMore };
