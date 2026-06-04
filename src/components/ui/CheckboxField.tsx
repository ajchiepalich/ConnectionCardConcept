interface CheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export function CheckboxField({
  id,
  label,
  checked,
  onChange,
  description,
}: CheckboxFieldProps) {
  return (
    <div className="flex gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-highlands-600 focus:ring-highlands-500"
      />
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={id}
          className="cursor-pointer text-base font-medium text-slate-800"
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-slate-500">{description}</p>
        )}
      </div>
    </div>
  );
}
