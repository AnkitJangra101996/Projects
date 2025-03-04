export const multiStepFormData = [
  {
    id: "step-1",
    title: "Step 1: Personal Info",
    content: (
      <>
        <input
          name="name"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
          type="text"
        />
        <input
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
          type="email"
        />
        <input
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
          type="password"
        />
      </>
    ),
  },
  {
    id: "step-2",
    title: "Step 2: Choose Profile Picture",
    content: (
      <>
        <input
          name=""
          placeholder="Street Address"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
          type="text"
        />
        <input
          name=""
          placeholder="City"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
          type="text"
        />
        <input
          name=""
          placeholder="Postal Code"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-primary"
          type="text"
        />
      </>
    ),
  },
  {
    id: "step-3",
    title: "Step 3: Review & Submit",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Name:</strong> John Doe
        </li>
        <li>
          <strong>Email:</strong> john.doe@example.com
        </li>
        <li>
          <strong>Address:</strong> 123 Main St, City, 12345
        </li>
      </ul>
    ),
  },
];
