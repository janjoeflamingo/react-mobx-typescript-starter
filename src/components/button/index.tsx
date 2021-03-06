import * as React from 'react';

import { StyledButton } from './styles';

export interface OuterProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactChild[] | string;
  children?: React.ReactChild[] | string;
  disabled?: boolean;
}

const Button: React.FC<OuterProps> = ({ children, label, disabled, ...props }: OuterProps) => (
  <StyledButton type="button" aria-disabled={disabled} {...props}>
    {children || label}
  </StyledButton>
);

// export class AnchorButton extends AbstractButton<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
//   public static displayName = `AnchorButton`;

//   public render() {
//       const { href, tabIndex = 0 } = this.props;

//       return (
//           <a
//               role="button"
//               {...removeNonHTMLProps(this.props)}
//               {...commonProps}
//               href={commonProps.disabled ? undefined : href}
//               tabIndex={commonProps.disabled ? -1 : tabIndex}
//           >
//               {this.renderChildren()}
//           </a>
//       );
//   }
// }

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  children: '',
};

export default Button;
