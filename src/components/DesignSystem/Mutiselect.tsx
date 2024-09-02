import { Select, Label, Button, Popover, ListBox, ListBoxItem, SelectValue, Key } from 'react-aria-components'
import { IoChevronDownSharp } from "react-icons/io5"
import { FaCheck } from 'react-icons/fa'
import { LuAsterisk } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'
import { SelectOption } from '../../models/formTypes'
import { useController, UseFormReturn } from 'react-hook-form'
import InfoIcon from './InfoIcon'
import { useState } from 'react'

interface Props {
  methods: UseFormReturn<any>
  name: string
  options: SelectOption[]
  label: any
  infoText?: string
  onChange?: (value: string[]) => void
  onBlur?: (value: string[]) => void
  required?: boolean
  disabled?: boolean
  placeholder?: string
}

const MultiSelect = ({
  methods,
  name,
  options,
  label,
  infoText,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  placeholder = 'Seleccionar',
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { control } = methods
  const { field, fieldState } = useController({ 
    name,
    control,
    defaultValue: [],
    rules: {
      required: { value: required, message: 'Required field' },
    }
  })

  const handleSelectionChange = (key: Key) => {
    const itemKey = String(key)
    const newValues = field.value.includes(itemKey)
      ? field.value.filter((el: string) => el !== itemKey)
      : [...field.value, itemKey]

    field.onChange(newValues)
    if(onChange) onChange(newValues)

    setIsOpen(true)
  }

  return (
    <Select
      name={field.name}
      onSelectionChange={handleSelectionChange}
      onOpenChange={setIsOpen}
      className="inline-flex flex-col min-w-[5rem]"
      onBlur={() => {
        field.onBlur()
        if(onBlur) onBlur(field.value)
      }}
    isOpen={isOpen}
    >
      <span className="flex items-start gap-1">
        { label && 
          <Label className='flex justify-between items-center ml-2 text-sm cursor-pointer text-slate-600 select-none'>
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
          {field.value.length === 0
            ? <span className="text-slate-400 font-light">{placeholder}</span>
            : `${field.value.length} item${field.value.length > 1 ? 's' : ''} selected`
          }
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

      <Popover className="w-[--trigger-width]" placement="bottom">
        <ListBox selectionBehavior="toggle" className="p-1 m-0 bg-white rounded-md border border-slate-300 text-slate-600 focus:outline-none">
          {options.map(option => (
            <ListBoxItem
              key={crypto.randomUUID()}
              id={option.value}
              textValue={option.label}
              className={({ isDisabled }) => (
                twMerge(
                  `w-full flex items-center justify-between p-2 rounded-md text-sm cursor-pointer select-none hover:bg-sky-100 focus:outline-none focus:bg-sky-100`,
                  field.value.includes(option.value) && 'text-sky-600 font-medium',
                  isDisabled && 'bg-gray-100 text-gray-400 italic pointer-events-none',
                )
              )}
            >
              <span>{option.label}</span>
              {field.value.includes(option.value) && <FaCheck />}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  )
}

export default MultiSelect
