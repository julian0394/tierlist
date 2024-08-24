import { FieldError, Label, TextArea, TextField } from "react-aria-components"
import { useController, UseFormReturn } from "react-hook-form"
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"
import { LuAsterisk } from "react-icons/lu";
import { setInputSize } from "../../utils/utils"

interface Props {
  methods: UseFormReturn<any>
  name: string
  label?: string
  helperText?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  startIcon?: IconType
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  rules?: object
  size?: 0.5 | 1 | 2 | 3
  twClasses?: string
}

const CustomTextArea = ({
  name,
  methods,
  label,
  helperText,
  startIcon: StartIcon,
  onChange,
  onBlur,
  rules,
  size = 1,
  twClasses = '',
  required = false,
  placeholder = 'Completar',
  disabled = false,
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
  
  const inputSize = setInputSize(size)

  return (
    <TextField
      name={field.name}
      value={field.value}
      isRequired={required}
      onChange={(value: string) => {
        field.onChange(value)
        if(onChange) onChange(value)
      }}
      onBlur={(e: any) => {
        field.onBlur()
        if(onBlur) onBlur(e.target.value)
      }}
      validationBehavior="aria"
      isInvalid={fieldState.invalid}
      className={`inline-flex flex-col min-w-[5rem] text-slate-800`}
    >
      <span className="flex items-center justify-between">
        <span className="flex items-start gap-1">
          <Label className="cursor-pointer text-slate-600 text-sm ml-2 select-none">{label}</Label>
          { required && <LuAsterisk className="text-rose-500" size={10} />}
        </span>
        { helperText &&
          <span className='mr-2 text-xs font-medium text-slate-500 '>
            {helperText}
          </span>
        }
      </span>

      <span className="relative">
        { StartIcon && <StartIcon className="absolute top-0 bottom-0 left-0 my-auto mx-3 text-sm text-slate-500 pointer-events-none" /> }
        <TextArea
          name={field.name}
          value={field.value}
          ref={field.ref}
          placeholder={placeholder}
          disabled={disabled}
          
          className={twMerge(
            `${StartIcon ? 'pr-3 pl-8' : 'px-3'} ${inputSize} py-2
            h-[42px] min-h-[42px] resize-y
            transition-colors duration-200
            text-slate-600 bg-slate-100
            border rounded-md outline-none
            border-slate-300 hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-300
            placeholder:text-slate-400 placeholder:font-light placeholder:select-none`,
            disabled && 'cursor-not-allowed hover:border-slate-300',
            fieldState?.error && 'border-rose-500 ring-1 ring-rose-300 focus:border-red-700 focus:ring-red-500 hover:border-red-600',
            twClasses,
          )}
        />
      </span>
      
      { fieldState?.error 
        ? <FieldError className='ml-2 text-xs text-rose-600'>{fieldState?.error?.message ?? 'Campo con error'}</FieldError> 
        : <span className="h-[16px]" />
      }
    </TextField>
  )
}

export default CustomTextArea
