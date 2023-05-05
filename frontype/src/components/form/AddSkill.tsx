import { useState, ChangeEvent, useContext } from "react";

import { ProfileContext } from "../../context/profile";
import { IprofileBase } from "../../interfaces/profile";
import { IcreateSkill } from "../../interfaces/skill";
import styles from "../../styles/form/AddSkill.module.css";

import Post from "./Post";

const AddSkill = ({ profiles }: { profiles: IprofileBase[] }) => {
  const [skill, setSkill] = useState<IcreateSkill>({
    name: "",
    grade: 0,
    wilder: NaN,
  });
  const { updateProfile } = useContext(ProfileContext);

  const onPosted = () => {
    setSkill({
      name: "",
      grade: 0,
      wilder: NaN,
    });
    updateProfile();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((skill) => ({ ...skill, name: e.target.value }));
  };

  const handleGradeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((skill) => ({ ...skill, grade: +e.target.value }));
  };

  const handlewilderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSkill((skill) => ({ ...skill, wilder: +e.target.value }));
  };

  return (
    <Post path={"/skill"} data={skill} onPosted={onPosted}>
      <div className={styles.input}>
        <label>Name </label>
        <input type="text" value={skill.name} onChange={handleNameChange} />
      </div>
      <div className={styles.input}>
        <label>Grade : {skill.grade} </label>
        <input
          type="range"
          min="0"
          max="10"
          value={skill.grade}
          onChange={handleGradeChange}
        />
      </div>
      <div className={styles.select}>
        <label htmlFor="wilder_select">Choose a Wilder</label>
        <select name="wilders" id="wilder_select" onChange={handlewilderChange}>
          <option value={undefined}>--Choose a Wilder--</option>
          {profiles?.map((profile) => (
            <option key={profile.id} value={profile.id}>
              {profile.name}
            </option>
          ))}
        </select>
      </div>

      <button>ADD</button>
    </Post>
  );
};

export default AddSkill;
