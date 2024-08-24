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
          <CustomInput methods={methods} name="input3" label="DNI" helperText="Con info extra" />
          <CustomInput methods={methods} name="input4" label="Nombre completo"  required />
        </div>
        <div className="flex items-center">
          <CustomTextArea methods={methods} name="textareaa" />
        </div>
        <div className="flex items-center">
          <CustomSelect
            methods={methods}
            name="goasjhoa"
            label="Elige un elemento"
            options={[
              {value: '1', label: 'Calcio'},
              {value: '2', label: 'Plomo', disabled: false},
              {value: '3', label: 'Potasio', disabled: true},
              {value: '4', label: 'Helio', disabled: false},
            ]}
          />
          <CustomSelect
            methods={methods}
            name="qewrrytuyiuo"
            label="Des-seleccionable"
            allowClear
            options={[
              {value: '1', label: 'Calcio'},
              {value: '2', label: 'Plomo', disabled: false},
              {value: '3', label: 'Potasio', disabled: true},
              {value: '4', label: 'Helio', disabled: false},
            ]}
            required
          />
        </div>
        <button className="text-black border border-black" type="submit">submit</button>
        <button className="text-black border border-black" type="button" onClick={() => console.log(methods.formState.errors)}>errores</button>
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
