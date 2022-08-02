const RandomButton = ({ rando }) => {
  return (
    <div>
      <button
        className='btn btn-info fw-bold  mt-4 mb-2  marmalade'
        onClick={rando}
      >
        Random Number
      </button>
    </div>
  );
};

export default RandomButton;
