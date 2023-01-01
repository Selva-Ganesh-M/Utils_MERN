// https://formsubmit.co/428ed2787f23228ca2d4c40fb8c10a61

// Site: Form submit

{
  /* FORM */
}
<div
  className="
  // default
  w-full
  // md
  md:w-3/5 self-start
  "
>
  <form
    target="_blank"
    onSubmit={handleSubmit}
    action={"https://formsubmit.co/428ed2787f23228ca2d4c40fb8c10a61"}
    method="POST"
    className="flex flex-col justify-center gap-4"
  >
    {/* Name */}
    <input
      className={`${inputStyle}`}
      placeholder="Name"
      type="text"
      {...register("name", {
        required: true,
        maxLength: 100,
      })}
    />
    {errors.name && (
      <p className={`${errorStyle}`}>
        {errors.name.type === "required" && "This is a required field."}
        {errors.name.type === "maxLength" &&
          "Length shouldn't exceed 100 chars."}
      </p>
    )}

    {/* Email */}
    <input
      className={`${inputStyle}`}
      placeholder="Email"
      type="EMAIL"
      {...register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      })}
    />
    {errors.email && (
      <p className={`${errorStyle}`}>
        {errors.email.type === "required" && "This is a required field."}
        {errors.email.type === "pattern" && "Not a valid email address."}
      </p>
    )}
    {/* MESSAGE */}
    <textarea
      className={`${inputStyle}`}
      cols={50}
      rows={4}
      placeholder="Message"
      {...register("message", {
        required: true,
        maxLength: 2000,
      })}
    />
    {errors.message && (
      <p className={`${errorStyle}`}>
        {errors.message.type === "required" && "This field is required."}
        {errors.message.type === "maxLength" && "Max length is 2000 char."}
      </p>
    )}
    <button className="bg-secondary-500 rounded-lg py-3 px-10 hover:bg-primary-500">
      SUBMIT
    </button>
  </form>
</div>;
