export default function Feedback() {
  return (
    <form className="mt-48 mb-24 p-5 flex flex-col gap-4 text-lg">
      <p className="text-3xl font-semibold">Feedback</p>
      <div>
        <label className="text-sm">Sujet</label>
        <br></br>
        <select
          className="bg-gray-50 border border-gray-300 
                                        text-gray-600 text-sm rounded-lg 
                                        focus:border-blue-500 w-full p-2.5"
        >
          <option value="Feedback">-- Sujet--</option>
          <option value="Feedback">Feedback</option>
          <option value="Feedback">Réclamation</option>
        </select>
        <br></br>
        <label className="text-sm">Adresse Email*</label>
        <br></br>
        <input
          className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500
                                        w-full p-2.5"
          type="email"
          placeholder="email@email.com"
        />
        <br></br>
        <label className="text-sm">Num Téléphone</label>
        <br></br>
        <input
          className="bg-gray-50 border border-gray-300
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5"
          type="text"
          placeholder="24888102"
        />
        <br></br>
        <label className="text-sm">Message</label>
        <br></br>
        <textarea
          className="bg-gray-50 border border-gray-300 
                                            text-sm rounded-lg 
                                            focus:border-blue-500 
                                            w-full p-2.5"
          rows="4"
          cols="25"
          maxlength="300"
          placeholder="Ecrivez votre message ici..."
        ></textarea>
        <br></br>
        <a
          className="bg-blue-500 hover:bg-blue-700 
                                        text-white font-bold 
                                        py-2 px-4 rounded"
          type="button"
          href="/recu"
        >
          Submit
        </a>
      </div>
    </form>
  );
}
