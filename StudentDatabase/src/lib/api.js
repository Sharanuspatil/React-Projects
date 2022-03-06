const FIREBASE_DOMAIN = "https://student-b2d7d-default-rtdb.firebaseio.com";

export async function getAllStudent() {
  const response = await fetch(`${FIREBASE_DOMAIN}/students.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Students.");
  }

  const transformedStudent = [];

  for (const key in data) {
    const StudentObj = {
      id: key,
      ...data[key],
    };

    transformedStudent.push(StudentObj);
  }

  return transformedStudent;
}

export async function addStudent(StudentData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/students.json`, {
    method: "POST",
    body: JSON.stringify(StudentData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create Student.");
  }

  return null;
}
