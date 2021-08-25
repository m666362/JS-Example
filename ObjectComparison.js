const array1 = [
    {
      label: "active",
      menu: "menu 10"
    },
    {
      label: "Contacted",
      menu: "menu 1"
    },
    {
      label: "Contact in Future",
      menu: "menu 2"
    },
    {
      label: "Attempted to Contact",
      menu: "menu 3"
    },
    {
      label: "Not Contacted",
      menu: "menu 4"
    },
    {
      label: "Lost Lead",
      menu: "menu 5"
    },
    {
      label: "Pre-Qualified",
      menu: "menu 2"
    },  
  ]
  

const array2 = [
    {
      label: "Contact in Future",
      menu: "menu 2",
    },
    {
      label: "Attempted to Contact",
      menu: "menu 3",
    },
  ]

const intersections = array1.filter((option, index)=>{
    return array2?.some(indv => JSON.stringify(indv) === JSON.stringify(option))
})

console.log(intersections);
