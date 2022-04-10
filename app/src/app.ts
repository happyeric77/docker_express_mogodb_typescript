async function handleUpdateProfileRequest() {
  try {
    const contEdit = document.getElementById("container-edit")!;
    const cont = document.getElementById("container")!;

    document.getElementById("name")!.textContent = (
      document.getElementById("input-name")! as HTMLInputElement
    ).value;
    document.getElementById("email")!.textContent = (
      document.getElementById("input-email")! as HTMLInputElement
    ).value;
    document.getElementById("interests")!.textContent = (
      document.getElementById("input-interests")! as HTMLInputElement
    ).value;
    cont.style.display = "block";
    contEdit.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function updateProfile() {
  const contEdit = document.getElementById("container-edit")!;
  const cont = document.getElementById("container")!;

  (document.getElementById("input-name")! as HTMLInputElement).value =
    document.getElementById("name")!.textContent ?? "";
  (document.getElementById("input-email")! as HTMLInputElement).value =
    document.getElementById("email")!.textContent ?? "";
  (document.getElementById("input-interests")! as HTMLInputElement).value =
    document.getElementById("interests")!.textContent ?? "";

  cont.style.display = "none";
  contEdit.style.display = "block";
}

(async function init() {
  document.getElementById("name")!.textContent = "ColorfulLife.jp";
  document.getElementById("email")!.textContent = "ColorfulLife.jp@email.com";
  document.getElementById("interests")!.textContent = "Coding, enjoying life";

  const cont = document.getElementById("container")!;
  cont.style.display = "block";
})();
