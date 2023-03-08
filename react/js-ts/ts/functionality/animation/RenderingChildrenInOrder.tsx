// THIS LOADS THE CHILD COMPONENTS MAPPED ONE BY ONE

// PARENT CONTAINER '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

{
  /* <motion.div
  className="flex md:justify-between xs:flex-col md:flex-row"
  initial="hidden"
  whileInView={"visible"}
  viewport={{
    once: true,
    amount: 0.5,
  }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }}
>
  {benefits.map((benefit, index) => (
    <Benefit
      key={index}
      benefit={benefit}
      setSelectedSection={setSelectedSection}
    />
  ))}
</motion.div>; */
}

// CHILD COMPONENTS ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

{
  /* <motion.div
  className=" text-center border-2 flex flex-col gap-5 py-6 px-4 rounded-md border-gray-100 mb-6 basis-[31%]"
  variants={{
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }}
>
  ....
</motion.div>; */
}
