"use client"

import { useRef, useState } from 'react';
import { CiClock2 } from 'react-icons/ci';
import { LuCalendarDays } from 'react-icons/lu';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface BikeData {
  id: string;
  label: string;
  name: string;
  type?: string;
  holder: string;
  seleOp?: (string | number)[];
}

const BikeForm = () => {
  const calendarRef = useRef<any>(null);
  const clockRef = useRef<any>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const bikeData: BikeData[] = [
    {
      id: "name",
      label: "Name and Surname",
      name: "name",
      type: "text",
      holder: "Enter your name and surname",
    },
    {
      id: "email",
      label: "Email Address",
      name: "email",
      type: "email",
      holder: "Enter your email address",
    },
    {
      id: "phone",
      label: "Telephone Number",
      name: "phone",
      type: "text",
      holder: "Enter your telephone number",
    },
    {
      id: "service",
      label: "Service Type",
      name: "service",
      holder: "Select the service types",
      seleOp: ["Bike", "Bus", "Car"],
    },
    {
      id: "date",
      label: "Date",
      name: "date",
      type: "text",
      holder: "Select the date",
    },
    {
      id: "time",
      label: "Time",
      name: "time",
      type: "text",
      holder: "Select the time",
    },
  ];

  return (
    <form className="rounded-3xl bg-white/30 p-5 md:p-7.5 w-full">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-x-7.5 md:gap-y-7.5 md:flex-wrap">
        {bikeData.map((field) => (
          <div key={field.id} className="flex flex-col gap-2 w-full md:w-[47%]">
            <label htmlFor={field.id} className="text-sm md:text-lg font-semibold">{field.label}</label>

            {field.id === "service" ? (
              <select
                name={field.name}
                id={field.id}
                className="text-xs md:text-base font-normal text-[#333333]/50 w-full py-3 md:py-3.5 px-2 md:px-6 bg-white rounded-lg cursor-pointer focus:outline-none"
              >
                <option value={field.holder} disabled>{field.holder}</option>
                {field.seleOp?.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            ) : field.id === "date" ? (
              <div className="relative">
                <DatePicker
                  ref={calendarRef}
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText={field.holder}
                  wrapperClassName="w-full"
                  dateFormat="yyyy-MM-dd"
                  className="text-xs md:text-base font-normal text-[#333333]/50 w-full py-3 md:py-3.5 px-2 md:px-6 bg-white rounded-lg focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => calendarRef.current?.setOpen(true)}
                  className="absolute top-1/2 right-6 transform -translate-y-1/2 text-[#333333]/50"
                >
                  <LuCalendarDays className="text-xl" />
                </button>
              </div>
            ) : field.id === "time" ? (
              <div className="relative">
                <DatePicker
                  ref={clockRef}
                  selected={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  wrapperClassName="w-full"
                  dateFormat="h:mm aa"
                  placeholderText={field.holder}
                  className="text-xs md:text-base font-normal text-[#333333]/50 w-full py-3 md:py-3.5 px-2 md:px-6 bg-white rounded-lg focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => clockRef.current?.setOpen(true)}
                  className="absolute top-1/2 right-6 transform -translate-y-1/2 text-[#333333]/50"
                >
                  <CiClock2 className="text-xl" />
                </button>
              </div>
            ) : (
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                placeholder={field.holder}
                className="text-xs md:text-base font-normal text-[#333333]/50 w-full py-3 md:py-3.5 px-2 md:px-6 bg-white rounded-lg focus:outline-none"
              />
            )}
          </div>
        ))}
      </div>

      <div className="w-full mt-7.5 flex justify-center">
        <button type="submit" className="font-semibold text-xl text-white rounded-full py-2.5 px-6 bg-[#FA8B02]">
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BikeForm;
