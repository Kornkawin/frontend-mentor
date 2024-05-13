const QrCard = () => {
  return (
    <div className="bg-card w-auto">
      <div>
        <img src="/image-qr-code.png" alt="qr-code"/>
      </div>
      <div>
        <h1>
          Improve your front-end skills by building projects
        </h1>
      </div>
      <div className="mb-4">
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCard;
