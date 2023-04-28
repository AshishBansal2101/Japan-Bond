import React from "react";
import "../styles/features2.css";

const Features2 = () => {
  return (
    <div>
      <div class="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
        <div class="mb-16 text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The Reasons to Trust Us:
          </p>
        </div>
        <div class="flex flex-wrap my-12 dark:text-white">
          <div class="w-full  md:w-1/2  lg:w-1/3 p-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <div class="flex items-center mb-6">
              {/* <svg
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 text-xl">Strong Water Resistance</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              It's a simple-to-use, super-strong, rubberized, waterproof
              adhesive that attaches, seals, and repairs almost anything in
              seconds.
              {/* It has an extremely
              thick adhesive that sticks to the surface and can be used on both
              dry and wet surfaces. */}
            </p>
          </div>
          <div class="w-full  md:w-1/2 lg:w-1/3  p-8 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 text-xl">Heat And Fungal Resistance</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Even when exposed to moisture or heated temperatures, fungus
              resistant adhesives preserve their physical, mechanical,
              electrical, and optical qualities.
            </p>
          </div>
          <div class="w-full  md:w-1/2  lg:w-1/3  p-8 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 text-xl">Better Penetration In Wood</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              The degree of adhesive penetration into the porous network of
              linked cells is thought to have a substantial impact on adhesive
              bond performance between wood parts.
            </p>
          </div>
          <div class="w-full  md:w-1/2 lg:w-1/3  p-8 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 text-xl">High Initial Track</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              This adhesive is excellent for applications involving a substrate
              with an unique surface that traditional permanent adhesives have
              trouble adhering to adequately.
            </p>
          </div>
          <div class="w-full  md:w-1/2  lg:w-1/3 lg:border-b-0 p-8 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 text-xl">Terminator Proof</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              It's an excellent termite and borer repellent. It has an Insta
              Kill solution that kills termites nearly instantly and prevents
              further infestations when applied regularly.
            </p>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-8 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="ml-4 text-xl">High Solids</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              The amount of base product (percentage of non-volatile substance)
              left in the glue after the volatile solvent has evaporated is
              referred to as "solids content."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
