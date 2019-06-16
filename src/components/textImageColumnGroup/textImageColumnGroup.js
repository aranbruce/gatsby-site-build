import React from "react"

import TextImageColumn from "../../components/textImageColumn/textImageColumn"

const TextImageColumnGroup = ({ textImageColumns }) => {
  return (
    <div>
      {textImageColumns.map(textImageColumn => {
        return (
          <TextImageColumn
            textImageColumn={textImageColumn}
            key={textImageColumn.id}
            hero={textImageColumn.hero}
            reverse={textImageColumn.reverse}
            children={textImageColumn.children}
            image={textImageColumn.image}
            imageAlt={textImageColumn.imageAlt}
          />
        )
      })}
    </div>
  )
}

export default TextImageColumnGroup
