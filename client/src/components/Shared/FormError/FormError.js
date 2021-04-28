

function FormError({ children }) {

  if (children) {
    return (
      <div className="error">{children}</div>
    );
  } else {
    return null;
  }

};

<style jsx='true'>{`
  .error{
    background: red,
    color: white
  }
`}

</style>;
export default FormError;