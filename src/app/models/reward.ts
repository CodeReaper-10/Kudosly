export class Reward {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
  
    constructor(id: number, name: string, description: string, points: number, image: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.points = points;
      this.image = image;
    }
  }
  