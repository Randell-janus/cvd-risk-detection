export const FieldLayout = ({ children }) => {
  return (
    <div className="sm:flex justify-between sm:space-x-4 space-y-6 sm:space-y-0">
      {children}
    </div>
  );
};

export const Divider = () => {
  return <div className="border-t"></div>;
};

export const FormSection = ({ children }) => (
  <section className="space-y-6">{children}</section>
);

export const FormSectionLabel = ({ children }) => (
  <>
    <h2 className="font-semibold">{children}</h2>
  </>
);

export const FormSectionLayout = ({ children }) => (
  <div className="w-full space-y-1">{children}</div>
);
