import * as React from 'react'

import { isObject, isFunction, isEmptyChildren } from 'utils/assertions'

export interface HandlerProps {
  children: (props: any) => any;
  onSubmit?: (values: any, props: any) => void;
  initialValues?: any;
  validationSchema?: any;
}

export interface HandlerState {
  initialized: boolean,
  errors: any,
  values: any,
  touched: any,
  dirty: boolean,
  isValid: boolean,
  submitCount: number,
  isSubmitting: boolean;
  isValidating: boolean;
}

class Form extends React.Component<HandlerProps, HandlerState> {
  static defaultProps = {
    initialValues: {},
    validateOnBlur: true,
    validateOnChange: true,
  }

  static getDerivedStateFromProps (nextProps: HandlerProps, prevState: HandlerState) {
    const { initialized } = prevState
    const { initialValues } = nextProps

    if (initialized || !Object.keys(initialValues).length) {
      return null
    }

    return {
      ...prevState,
      values: initialValues,
      initialized: true,
    }
  }

  state = {
    initialized: false,
    errors: {},
    values: {},
    touched: {},
    dirty: false,
    isValid: false,
    submitCount: 0,
    isSubmitting: false,
    isValidating: false,
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState(state => ({ values: { ...state.values, [name]: value } }))
  }

  handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e)
    console.log('handleBlur 1')
  }

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e)
    console.log('handleFocus 1')
  }

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({ isSubmitting })
  }

  handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    this.setState({ isSubmitting: true })

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.values, { setSubmitting: this.state.setSubmitting })
    }
  }

  handleReset = () => {
    console.log('reset')
  }

  render () {
    const { children } = this.props
    const {
      dirty,
      errors,
      values,
      touched,
      isValid,
      isSubmitting,
    } = this.state

    console.error(
      isObject(children),
      isFunction(children),
      isEmptyChildren(children),
    )

    return children({
      dirty,
      errors,
      values,
      touched,
      isValid,
      isSubmitting,
      handleBlur: this.handleBlur,
      handleFocus: this.handleFocus,
      handleReset: this.handleReset,
      handleInput: this.handleChange,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    })
  }
}

export default Form
