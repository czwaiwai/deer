import validators from './validators'
import rules from './validators-rule'
rules.forEach(item => validators.addRule(item))
export default validators
