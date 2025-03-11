"use client";
import React from "react";

const Expercise = () => {
  return (
    <section className="relative  flex flex-col justify-center bg-[#222222] overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            <div className="-my-6">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-semibold  text-amber-400 mr-20 mb-9   text-center text-3xl ">My Expersice</div>

                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <p className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2017</p>
                  <div className="text-xl font-bold text-amber-400">Universitas AKPRIND Indonesia</div>
                </div>

                <div className="text-white">
                  Installing the Linux operating system in the lab <br />
                  Maintain computer network servers.
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <p className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</p>
                  <div className="text-xl font-bold  text-amber-400">Ruster Store</div>
                </div>

                <div className="text-white">
                  Performing the creation of a Java-based desktop employee payroll application system <br />
                  Giving directions to Ruster Screen Printing regarding the development of employee payroll applications and explaining various aspects of Java Desktop-based applications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expercise;
