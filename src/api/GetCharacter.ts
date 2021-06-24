import { api } from "../services/axios";

type ResponseProps = {
  id: number;
  name: string;
  gender: string;
  image: string;
};

class Character {
  async getCharacter(name: string) {
    return api
      .get(`character/?name=${name.split(" ").join("+")}`)
      .then(async (response) => {
        const data = response.data.results.map((onlyCamps: ResponseProps) => ({
          idCharacter: onlyCamps.id,
          nameCharacter: onlyCamps.name,
          genderCharacter: onlyCamps.gender,
          pictureCharacter: onlyCamps.image,
        }));
        return data;
      })
      .catch(() => {
        return null;
      });
  }
}

export default new Character();
