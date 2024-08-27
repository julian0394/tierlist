import { useController, UseFormReturn } from "react-hook-form"
import { SelectOption } from "../../models/formTypes"
import { Select, Label, Button, SelectValue, Popover, ListBox, ListBoxItem, FieldError } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { IoChevronDownSharp } from "react-icons/io5"
import { LuAsterisk } from "react-icons/lu"
import { FaCheck } from "react-icons/fa"
import InfoIcon from "./InfoIcon"

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

const CustomSelect = ({
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

      <Popover className="w-[--trigger-width]" placement="bottom">
        <ListBox selectionBehavior="toggle" className="p-1 m-0 bg-white rounded-md border border-slate-300 text-slate-600 focus:outline-none">
          { allowClear && 
            <ListBoxItem
              key={crypto.randomUUID()}
              id='placeholder'
              textValue={placeholder}
              className={({ isDisabled }) => (
                twMerge(
                `w-full flex items-center justify-between p-2 
                rounded-md text-sm cursor-pointer select-none 
                hover:bg-sky-100 focus:outline-none focus:bg-sky-100`,
                isDisabled && 'bg-gray-100 text-gray-400 italic pointer-events-none'
              ))}
              isDisabled={!Boolean(methods.watch(name))}
            >
              {placeholder}
            </ListBoxItem>
          }
          { options.map( option => (
            <ListBoxItem
              key={crypto.randomUUID()}
              id={option.value}
              textValue={option.label}
              className={({ isSelected, isDisabled }) => (
                twMerge(
                  `w-full flex items-center justify-between p-2 rounded-md text-sm cursor-pointer select-none hover:bg-sky-100 focus:outline-none focus:bg-sky-100`,
                  isSelected && 'text-sky-600 font-medium',
                  isDisabled && 'bg-gray-100 text-gray-400 italic pointer-events-none'
                )
              )}
              isDisabled={option.disabled}
            >
              {({ isSelected }) => (
                <>
                  <span>{option.label}</span>
                  {isSelected && <FaCheck size={12} />}
                </>
              )}
            </ListBoxItem>
          ))

          }
        </ListBox>
      </Popover>
    </Select>
  )
}

export default CustomSelect
