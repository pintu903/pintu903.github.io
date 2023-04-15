let drive = document
  .querySelector("#Drivegoogle")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1Sq5cvoBI5sqpCTaRl0W_XR7buHTYJYY4/view?usp=sharing")
  );
}
