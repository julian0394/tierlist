import { cva, VariantProps } from "class-variance-authority"
import { ReactNode } from "react"
import { Button } from "react-aria-components"
import { ClipLoader } from "react-spinners"
import { twMerge } from "tailwind-merge"

export const buttonVariants = cva(
  'w-32 py-3 flex items-center justify-center gap-2 rounded-md text-sm font-medium tracking-wide select-none transition-all duration-200 outline-none focus:ring-2 focus:ring-sky-400/40',
  {
    variants: {
      variant: {
        primary: 'text-white bg-gradient-to-tr from-sky-600 to-sky-500 hover:opacity-90',
        secondary: 'bg-white text-sky-600 border border-sky-600 hover:bg-slate-50 active:bg-slate-100 active:border-slate-300',
        ghost: 'text-sky-600 hover:bg-slate-200 active:bg-slate-300',
      }
    }
  }
)

interface Props extends VariantProps<typeof buttonVariants> {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
  startIcon?: ReactNode
  endIcon?: ReactNode
  styles?: string
  disabled?: boolean
  isLoading?: boolean
}

const CustomButton = ({ 
  text,
  onClick,
  startIcon,
  endIcon,
  styles,
  variant = 'primary',
  type = 'button',
  disabled = false,
  isLoading = false,
}: Props) => {
    return (
      <Button
        onPress={type === 'button' && onClick ? () => onClick() : () => null}
        type={type}
        isDisabled={disabled}
        className={twMerge(buttonVariants({variant}), styles)}
      >
        { isLoading 
          ? 
            <>
              <ClipLoader
                color={'#0284c7'}
                loading={true}
                size={15}
                aria-label="Loading icon"
                data-testid="loader"
              />
              <span>Loading</span>
          </>
          :
            <>
              {startIcon && <span>{startIcon}</span>}
              {text}
              {endIcon && <span>{endIcon}</span>}
            </>
        }
      </Button>
    )
}


export default CustomButton
