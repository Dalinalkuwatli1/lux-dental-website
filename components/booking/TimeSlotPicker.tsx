import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  availableSlots: string[];
  selectedSlot: string;
  onChange: (slot: string) => void;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availableSlots,
  selectedSlot,
  onChange,
}) => {
  if (availableSlots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50">
        <Clock className="w-6 h-6 text-neutral-300 mb-2" />
        <p className="text-xs text-neutral-400 text-center font-medium">
          No slots available for this date.<br />Please select another doctor or date.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <label className="text-xs font-semibold tracking-wider text-charcoal uppercase block mb-1">
        Select Time Slot
      </label>
      <div className="grid grid-cols-3 gap-2">
        {availableSlots.map((slot) => {
          const isSelected = selectedSlot === slot;
          return (
            <button
              key={slot}
              type="button"
              onClick={() => onChange(slot)}
              className={`py-2.5 px-3 rounded-full text-sm font-medium tracking-wide border transition-all duration-200 focus:outline-none cursor-pointer ${
                isSelected
                  ? 'bg-primary text-white border-primary shadow-soft scale-[1.03]'
                  : 'bg-white text-neutral-600 border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotPicker;
