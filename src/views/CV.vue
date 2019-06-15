<template>
  <div class="resume">
    <div class="resume-container">
      <div class="top">
        <div class="top-left">
          <img src="//unsplash.it/150/150">
        </div>
        <div class="top-right">
          <h3>JOHN DOE</h3>
          <h4>Programmer</h4>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptatum fuga ipsa nostrum dolor voluptatibus similique at cum ab officiis! Illum esse fuga sequi, omnis cupiditate saepe odit! Excepturi, quo.</p>
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="middle">
          <div class="middle-left">
            <div class="content middle-left-1">
              <h3>EDUCATIONS</h3>

              <div class="content middle-left-1-content">
                <h4>SMP Negeri 1 Pollung</h4>
                <p>2007 - 2010</p>
              </div>
              <div class="content middle-left-1-content">
                <h4>SMA Negeri 1 Pollung</h4>
                <p>2010 - 2013</p>
              </div>

              <div class="content middle-left-1-content">
                <h4>Universitas Sumatera Utara</h4>
                <p>2013 - 2016</p>
              </div>
            </div>
            <div class="middle-left-2">
              <h3>Skills</h3>
              <div class="content middle-left-2-content">
                <ul>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="middle-right">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div class="middle-right-1">
              <h4>Lorem</h4>
              <h5>
                <i>Jan, 2016 - Jan, 2017</i>
              </h5>
              <div class="content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, non reprehenderit. Consectetur aperiam, nulla, vero omnis exercitationem id itaque suscipit aliquid minima quibusdam harum quam, voluptate consequuntur odit porro incidunt.</p>
              </div>
            </div>

            <div class="middle-right-2">
              <h4>Lorem 1</h4>
              <h5>
                <i>Jan, 2017 - Jan, 2018</i>
              </h5>
              <div class="content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, non reprehenderit. Consectetur aperiam, nulla, vero omnis exercitationem id itaque suscipit aliquid minima quibusdam harum quam, voluptate consequuntur odit porro incidunt.</p>
              </div>
            </div>

            <div class="middle-right-3">
              <h4>Lorem 2</h4>
              <h5>
                <i>Jan, 2018 - Jan, 2019</i>
              </h5>
              <div class="content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, non reprehenderit. Consectetur aperiam, nulla, vero omnis exercitationem id itaque suscipit aliquid minima quibusdam harum quam, voluptate consequuntur odit porro incidunt.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-1">
          <div class="middle-1-left">
            <h3>INTEREST</h3>
            <div class="content">I like programming.</div>
          </div>
          <div class="middle-1-right">
            <h3>REFERENCES</h3>
            <div class="middle-1-right-content">
              <div class="content middle-1-right-content-1">
                <ul>
                  <li>LearnCPP</li>
                  <li>W3schools</li>
                  <li>Hackerrank</li>
                  <li>Geekforgeeks</li>
                  <li>Duniailkom</li>
                </ul>
              </div>
              <div class="content middle-1-right-content-2">
                <ul>
                  <li>LearnCPP</li>
                  <li>W3schools</li>
                  <li>Hackerrank</li>
                  <li>Geekforgeeks</li>
                  <li>Duniailkom</li>
                </ul>
              </div>
              <div class="content middle-1-right-content-3">
                <ul>
                  <li>LearnCPP</li>
                  <li>W3schools</li>
                  <li>Hackerrank</li>
                  <li>Geekforgeeks</li>
                  <li>Duniailkom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <h3>WEBSITE</h3>
          <div class="content">
            <p>dummy.com</p>
          </div>
        </div>
        <div class="bottom-middle-left-1">
          <h3>PHONE</h3>
          <div class="content">
            <p>+62800000001</p>
          </div>
        </div>
        <div class="bottom-middle-left-2">
          <h3>EMAIL</h3>
          <div class="content">
            <p>johndoe@dummy.com</p>
          </div>
        </div>
        <div class="bottom-right">
          <h3>TWITTER</h3>
          <div class="content">
            <p>johndoe</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.resume {
  margin: 0;
  box-sizing: border-box;
  min-height: 700px;
  background: white;
  box-shadow: 2px 2px 3px #171717;
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .content {
    margin-top: 5px;
  }
  .resume-container {
    .top {
      padding: 30px 25px;
      display: flex;
      flex: 1 2 auto;
      justify-content: center;
      align-items: center;

      .top-left {
        width: 150px;
        img {
          border-radius: 50%;
          object-fit: fill;
        }
      }
      .top-right {
        text-align: justify;
      }
      .top-right {
        margin-left: 15px;
      }
    }
    .mid {
      margin: 10px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;

      .middle {
        display: flex;

        .middle-left {
          width: 30%;
          border-right: 1px solid #ccc;
          display: flex;
          flex-flow: column;

          & > div {
            border-bottom: 1px solid #ccc;
          }
          & > div:last-child {
            border-bottom: none;
          }

          .middle-left-1 {
            padding: 10px;
            h3 {
            }

            .middle-left-1-content {
              margin-top: 5px;
            }
          }

          .middle-left-2 {
            padding: 10px;
          }

          & > div {
            margin-bottom: 15px;
          }
          .content {
            ul {
              list-style: none;
              counter-reset: skills;

              li {
                counter-increment: skills;
                margin-bottom: 5px;
                &::before {
                  content: counter(skills);
                  width: 20px;
                  height: 20px;
                  display: flex;
                  float: left;
                  background: #ccc;
                  border-radius: 50%;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  margin-right: 5px;
                  padding: 2.5px;
                }
              }
            }
          }
        }
        .middle-right {
          width: 70%;
          padding: 10px;

          & > div {
            margin-top: 10px;
          }
          .content {
            p {
              text-align: justify;
            }
          }
        }
      }

      .middle-1 {
        display: flex;
        flex-flow: row;
        border-top: 1px solid #ccc;

        .middle-1-left {
          width: 30%;
          padding: 10px;
          border-right: 1px solid #ccc;
        }
        .middle-1-right {
          width: 70%;
          padding: 10px;

          .middle-1-right-content {
            display: flex;
            flex-flow: row;
            justify-content: space-between;

            div {
              ul {
                list-style: none;
              }
            }
          }
        }
      }
    }

    .bottom {
      margin-top: 15px;
      display: flex;
      background: #ccc;
      justify-content: space-around;
      align-items: center;
      min-height: 100px;
    }
  }
}
</style>
