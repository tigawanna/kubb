/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type advanced =
  | (enumerationValueSpecificationDto & {
      /**
       * @type string
       */
      readonly type: 'enum'
    })
  | (rangeValueSpecificationDto & {
      /**
       * @type string
       */
      readonly type: 'range'
    })
  | (regexValueSpecificationDto & {
      /**
       * @type string
       */
      readonly type: 'regex'
    })
  | (sliderValueSpecificationDto & {
      /**
       * @type string
       */
      readonly type: 'slider'
    })
