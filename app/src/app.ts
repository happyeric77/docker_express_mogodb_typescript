async function handleUpdateProfileRequest() {
  try {
    const contEdit = document.getElementById("container-edit")!;
    const cont = document.getElementById("container")!;

    const payload = {
      name: (document.getElementById("input-name")! as HTMLInputElement).value,
      email: (document.getElementById("input-email")! as HTMLInputElement)
        .value,
      interests: (
        document.getElementById("input-interests")! as HTMLInputElement
      ).value,
    };

    const response = await fetch("http://localhost:3000/update-profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const jsonResponse = await response.json();

    document.getElementById("name")!.textContent = jsonResponse.name;
    document.getElementById("email")!.textContent = jsonResponse.email;
    document.getElementById("interests")!.textContent = jsonResponse.interests;

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
  const response = await fetch("http://localhost:3000/get-profile");
  const user = await response.json();
  document.getElementById("name")!.textContent = user.name
    ? user.name
    : "ColorfulLife.jp";
  document.getElementById("email")!.textContent = user.email
    ? user.email
    : "colorfulLife@example.com";
  document.getElementById("interests")!.textContent = user.interests
    ? user.interests
    : "coding, enjoying life";

  const cont = document.getElementById("container")!;
  cont.style.display = "block";
})();
