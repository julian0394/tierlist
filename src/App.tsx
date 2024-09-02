import CategoryGuide from "./components/Tierlist components/categoryGuide/CategoryGuide"
import CustomInput from "./components/DesignSystem/CustomInput"
import NextTools from "./components/Tierlist components/NextTools"
import Tierlist from "./components/Tierlist components/tierlist/Tierlist"
import TierToggle from "./components/Tierlist components/TierToggle"
import { useForm } from "react-hook-form"
import { FaBeer } from "react-icons/fa"
import { DevTool } from "@hookform/devtools"
import CustomTextArea from "./components/DesignSystem/CustomTextArea"
import CustomSelect from "./components/DesignSystem/CustomSelect"
import MultiSelect from "./components/DesignSystem/Mutiselect"
import CustomButton from "./components/DesignSystem/CustomButton"

const App = () => {
  const methods = useForm({shouldFocusError: true})
  const triggerSubmit = (data: any) => {
    console.log('value:', data)
  }
  return (
    <>
      <form className="m-5" onSubmit={methods.handleSubmit(triggerSubmit)}>
        <div className="flex items-center">
          <CustomInput methods={methods} name='input1' startIcon={FaBeer} placeholder="Sin label" />
          <CustomInput methods={methods} name='input2' endIcon={FaBeer} size={2} />
          <CustomInput methods={methods} name="input3" label="DNI" infoText="Con info extra" required />
          <CustomInput methods={methods} name="input4" label="Nombre completo"  required />
        </div>
        <div className="flex items-center">
          <CustomTextArea methods={methods} name="textarea" />
        </div>
        <div className="flex items-center">
          <CustomSelect
            methods={methods}
            name="select1"
            label="Elige un elemento"
            options={[
              {value: '1', label: 'Calcio'},
              {value: '2', label: 'Plomo', disabled: false},
              {value: '3', label: 'Potasio', disabled: true},
              {value: '4', label: 'Helio', disabled: false},
            ]}
            infoText="Hola, aquí vengo a dejar un poco de información extra para ayudarle a entender la funcionalidad del campo"
          />
          <CustomSelect
            methods={methods}
            name="select2"
            label="Elige un custom"
            optionLabel="valor"
            optionValue="texto"
            options={[
              {valor: '1', texto: 'Calcio'},
              {valor: '2', texto: 'Plomo'},
              {valor: '3', texto: 'Potasio'},
              {valor: '4', texto: 'Helio'},
            ]}
          />
          <CustomSelect
            methods={methods}
            name="select3"
            label="Des-seleccionable"
            allowClear
            options={[
              {value: '1', label: 'Calcio'},
              {value: '2', label: 'Plomo', disabled: false},
              {value: '3', label: 'Potasio', disabled: true},
              {value: '4', label: 'Helio', disabled: false},
              {value: '11', label: 'Calcio'},
              {value: '22', label: 'Plomo', disabled: false},
              {value: '33', label: 'Potasio', disabled: true},
              {value: '44', label: 'Helio', disabled: false},
              {value: '111', label: 'Calcio'},
              {value: '222', label: 'Plomo', disabled: false},
              {value: '333', label: 'Potasio', disabled: true},
              {value: '444', label: 'Helio', disabled: false},
              {value: '1111', label: 'Calcio'},
              {value: '2222', label: 'Plomo', disabled: false},
              {value: '3333', label: 'Potasio', disabled: true},
              {value: '4444', label: 'Helio', disabled: false},
            ]}
            required
          />
          <MultiSelect
            methods={methods}
            name="multiselect"
            label='labell'
            options={[
              {value: '1', label: 'Calcio'},
              {value: '2', label: 'Plomo', disabled: false},
              {value: '3', label: 'Potasio', disabled: true},
              {value: '4', label: 'Helio', disabled: false},
            ]}
          />
          {/* <CustomSelect
            methods={methods}
            name="select1"
            label="Elige un elemento"
            options={[
              {value: '1', label: 'Calcio', },
              {value: '2', label: 'Plomo', },
              {value: '3', label: 'Potasio', },
              {value: '4', label: 'Helio', },
            ]}
          /> */}
        </div>
        <CustomButton text="submit" type="submit" />
        <CustomButton variant='secondary' text="errores" onClick={() => console.log(methods.formState.errors)} />
      </form>
    
      <div className="m-5">
        <CategoryGuide />
        <TierToggle />
        <Tierlist />
        <NextTools />
      </div>

      <DevTool control={methods.control} />
    </>
  )
}

export default App
