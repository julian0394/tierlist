import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from "react-aria-components"
import { useController, UseFormReturn } from "react-hook-form"
import { LuAsterisk } from "react-icons/lu"
import InfoIcon from "./InfoIcon"
import { twMerge } from "tailwind-merge"
import { IoChevronDownSharp } from "react-icons/io5"
import { FaCheck } from "react-icons/fa"

interface Props {
  methods: UseFormReturn<any>
  name: string
  options: SelectOption[]
  label?: string
  placeholder?: string
  infoText?: string
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  rules?: object
  required?: boolean
  disabled?: boolean
  allowClear?: boolean
  flexSize?: 0.5 | 1 | 2 | 3
}

const TableSelect = ({
  methods,
  name,
  options,
  label,
  infoText,
  onChange,
  onBlur,
  rules,
  placeholder = 'Select an item',
  required = false,
  disabled = false,
  allowClear = false,
  flexSize = 1,
}: Props) => {
  const { control } = methods
  const { field, fieldState } = useController({ 
    name,
    control,
    rules: {
      required: { value: required, message: 'Required field' },
      // validate //TODO: rules para validar
    }
  })

  return (
    <Select
      name={field.name}
      selectedKey={field.value}
      onSelectionChange={(key) => {
        field.onChange(key === 'placeholder' ? '' : key)
        if(onChange) onChange(String(key === 'placeholder' ? '' : key))
      }}
      onBlur={(e: any) => {
        field.onBlur()
        if(onBlur) onBlur(e.target.value)
      }}
      className="inline-flex flex-col min-w-[5rem]"
      validationBehavior="aria"
      isRequired={required}
    >
      <span className="flex items-start gap-1">
        { label && 
          <Label className='ml-2 text-sm cursor-pointer text-slate-600 select-none'>
            {label}
          </Label>
        }
        { required && <LuAsterisk className="text-rose-500" size={10} /> }
        { infoText && <InfoIcon id={name} text={infoText} /> }
      </span>

      <Button 
        ref={field.ref}
        className={twMerge(
          `flex items-center justify-between py-2 px-3 text-slate-600 min-w-[10rem]
          border rounded-md outline-none select-none
          bg-slate-100 border-slate-300 hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-300
          transition-all duration-200`,
          disabled && 'bg-gray-100 cursor-not-allowed',
          fieldState?.error && 'border-rose-500 ring-1 ring-rose-300 focus:border-red-700 focus:ring-red-500 hover:border-red-600',
        )}
      >
        <SelectValue>
          {({defaultChildren, isPlaceholder}) => {
            return isPlaceholder ? <span className="text-slate-400 font-light">{placeholder}</span> : defaultChildren
          }}
        </SelectValue>
        <span className="flex">
          <span aria-hidden="true" className='relative flex items-center gap-3 text-slate-400'>
            <IoChevronDownSharp />
          </span>
        </span>
      </Button>

      { fieldState?.error
        ? <span className='ml-2 text-xs text-rose-600'>{fieldState?.error?.message ?? 'Campo con error'}</span> 
        : <span className="h-[16px]" />
      }

      <Popover className="w-[--trigger-width] p-1 m-0 max-h-[15rem] overflow-auto bg-white rounded-md border border-slate-300 text-slate-600 focus:outline-none" placement="bottom">
        <table>
          th
        </table>
      </Popover>
    </Select>
  )
}

export default TableSelect
