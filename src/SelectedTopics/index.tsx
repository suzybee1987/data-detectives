import { useTopicsContext } from "../Context";

export const SelectedTopics = () => {
  const { selectedCustomerType, toggleCustomer } = useTopicsContext();

  return (
    <>
      {selectedCustomerType.length > 0 && (
        <h3 className="my-3" id="selectedSection">
          You have selected: <br /> {selectedCustomerType}
        </h3>
      )}
    </>
  );
};
